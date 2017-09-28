//
//  NativeContactionRNManager.h
//  TestDemo
//
//  Created by Caofeng on 2017/9/27.
//  Copyright © 2017年 深圳中业兴融互联网金融服务有限公司. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface NativeContactionRNManager : RCTEventEmitter<RCTBridgeModule>

-(void)sendMessageWithName:(NSString *)name info:(id)info;

@end
