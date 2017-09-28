//
//  NativeContactionRNManager.m
//  TestDemo
//
//  Created by Caofeng on 2017/9/27.
//  Copyright © 2017年 深圳中业兴融互联网金融服务有限公司. All rights reserved.
//

#import "NativeContactionRNManager.h"

#define kEmitEventName @[@"EventReminder"]

@implementation NativeContactionRNManager

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
    return kEmitEventName;
}

- (void)startObserving{
    
}

- (void)stopObserving{}

-(void)sendMessageWithName:(NSString *)name info:(id)info {
    [self addListener:name];
    NSAssert([kEmitEventName containsObject:name], @"发送的messageName不存在");
    [self sendEventWithName:name body:info];
}


@end
