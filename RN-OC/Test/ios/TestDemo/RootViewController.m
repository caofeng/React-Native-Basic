//
//  RootViewController.m
//  TestDemo
//
//  Created by Caofeng on 2017/9/22.
//  Copyright © 2017年 深圳中业兴融互联网金融服务有限公司. All rights reserved.
//

#import "RootViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTConvert.h>
#import "FirstViewController.h"
#import "People.h"

@interface RootViewController ()<RCTBridgeModule>

@property (nonatomic, weak)RCTBridge *bridge;

@end

@implementation RootViewController

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

// RN-OC type1
RCT_EXPORT_METHOD(rnToiOS:(NSString *)name age:(NSInteger)age)
{
    RCTLogInfo(@"==由RN传值给iOS原生- name:%@===%ld",name,age);
    
    //这个类还挺有用的
    [RCTConvert BOOL:false];
    [RCTConvert NSString:@"sos"];
    
    //必须抛个通知
    [[NSNotificationCenter defaultCenter] postNotificationName:@"RNTOIOSNOTIFICATION" object:self userInfo:@{@"name":name,@"age":@(age)}];
}

// RN-OC type2
RCT_EXPORT_METHOD(RNInvokeOCCallBack:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback) {
    
    RCTLogInfo(@"接收到RN传过来的数据为:%@",dictionary);
//    NSLog(@"接收到RN传过来的数据为:%@",dictionary);
    NSArray *events = [[NSArray alloc] initWithObjects:@"哈哈",@"呵呵", nil];
    callback(@[[NSNull null], events]);
}

// RN-OC type3...

//导出常量
- (NSDictionary *)constantsToExport {
    return @{@"a":@"1234",@"b":@"54321"};
}

#pragma mark--VC Life Cycle

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    NSDictionary *initPara = @{@"scores" : @[@{@"name" : @"Alex",@"value": @"50"},@{@"name" : @"Joel",@"value": @"10"}]};
    RCTRootView *rootView = [[RCTRootView alloc]initWithBundleURL:jsCodeLocation moduleName:@"TestDemo" initialProperties:initPara launchOptions:nil];
    rootView.sizeFlexibility =  RCTRootViewSizeFlexibilityNone;
    self.view = rootView;
    
    self.bridge = rootView.bridge;
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(receiveNotification:) name:@"RNTOIOSNOTIFICATION" object:nil];
    
}

- (void)receiveNotification:(NSNotification *)notice {
    FirstViewController *vc = [[FirstViewController alloc]initWithNibName:@"FirstViewController" bundle:nil];
    vc.bridge = self.bridge;
    [self.navigationController pushViewController:vc animated:YES];
}

@end
