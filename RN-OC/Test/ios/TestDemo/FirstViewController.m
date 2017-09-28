//
//  FirstViewController.m
//  TestDemo
//
//  Created by Caofeng on 2017/9/25.
//  Copyright © 2017年 深圳中业兴融互联网金融服务有限公司. All rights reserved.
//

#import "FirstViewController.h"
#import "NativeContactionRNManager.h"

@interface FirstViewController ()

@end

@implementation FirstViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIButton *button_ = [UIButton buttonWithType:UIButtonTypeCustom];
    button_.backgroundColor = [UIColor redColor];
    button_.frame = CGRectMake(50, 350, 300, 100);
    [button_ setTitle:@"OC->RN" forState:UIControlStateNormal];
    [self.view addSubview:button_];
    [button_ addTarget:self action:@selector(buttonClick_:) forControlEvents:UIControlEventTouchUpInside];
    
}

- (void)buttonClick_:(UIButton *)button {
    
    NativeContactionRNManager *manager = [[NativeContactionRNManager alloc]init];
    [manager setBridge:self.bridge];
    [manager sendMessageWithName:@"EventReminder" info:@{@"name":@"曹植",@"age":@"100"}];
    [self.navigationController popViewControllerAnimated:YES];
}


- (void)dealloc
{
    NSLog(@"释放了");
}

@end
