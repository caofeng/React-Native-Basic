//
//  ViewController.m
//  TestDemo
//
//  Created by Caofeng on 2017/9/21.
//  Copyright © 2017年 深圳中业兴融互联网金融服务有限公司. All rights reserved.
//

#import "ViewController.h"
#import "RootViewController.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>

@interface ViewController ()<RCTBridgeModule>

@end

@implementation ViewController

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(rnToiOS:(NSString *)name age:(NSInteger)age)
{
    RCTLogInfo(@"==由RN传值给iOS原生- name:%@===%ld",name,age);
    //必须抛个通知
    [[NSNotificationCenter defaultCenter] postNotificationName:@"RNTOIOSNOTIFICATION_" object:self userInfo:@{@"name":name,@"age":@(age)}];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIButton *button_ = [UIButton buttonWithType:UIButtonTypeCustom];
    button_.backgroundColor = [UIColor redColor];
    button_.frame = CGRectMake(50, 350, 300, 100);
    [button_ setTitle:@"传统push" forState:UIControlStateNormal];
    [self.view addSubview:button_];
    [button_ addTarget:self action:@selector(buttonClick_:) forControlEvents:UIControlEventTouchUpInside];
    
    [[NSNotificationCenter defaultCenter]addObserverForName:@"RNTOIOSNOTIFICATION_" object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification * _Nonnull note) {
       
        NSLog(@"-----ViewController---------");
        
    }];
    
}

- (void)buttonClick_:(UIButton *)button {
    
    RootViewController *vc =[[RootViewController alloc]initWithNibName:@"RootViewController" bundle:nil];
    [self.navigationController pushViewController:vc animated:YES];
}

@end
