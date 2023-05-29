
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNEveryLayoutReactNativeSpec.h"

@interface EveryLayoutReactNative : NSObject <NativeEveryLayoutReactNativeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface EveryLayoutReactNative : NSObject <RCTBridgeModule>
#endif

@end
