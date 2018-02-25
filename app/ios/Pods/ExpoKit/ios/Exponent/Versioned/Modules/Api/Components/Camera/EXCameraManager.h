#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>
#import <AVFoundation/AVFoundation.h>

#if __has_include("EXFaceDetectorManager.h")
#import "EXFaceDetectorManager.h"
#else
#import "EXFaceDetectorManagerStub.h"
#endif

@class EXCamera;

static const int EXFlashModeTorch = 3;

typedef NS_ENUM(NSInteger, EXCameraType) {
  EXCameraTypeFront = AVCaptureDevicePositionFront,
  EXCameraTypeBack = AVCaptureDevicePositionBack
};

typedef NS_ENUM(NSInteger, EXCameraFlashMode) {
  EXCameraFlashModeOff = AVCaptureFlashModeOff,
  EXCameraFlashModeOn = AVCaptureFlashModeOn,
  EXCameraFlashModeTorch = EXFlashModeTorch,
  EXCameraFlashModeAuto = AVCaptureFlashModeAuto
};

typedef NS_ENUM(NSInteger, EXCameraAutoFocus) {
  EXCameraAutoFocusOff = AVCaptureFocusModeLocked,
  EXCameraAutoFocusOn = AVCaptureFocusModeContinuousAutoFocus,
};

typedef NS_ENUM(NSInteger, EXCameraWhiteBalance) {
  EXCameraWhiteBalanceAuto = 0,
  EXCameraWhiteBalanceSunny = 1,
  EXCameraWhiteBalanceCloudy = 2,
  EXCameraWhiteBalanceFlash = 3,
  EXCameraWhiteBalanceShadow = 4,
  EXCameraWhiteBalanceIncandescent = 5,
  EXCameraWhiteBalanceFluorescent = 6,
};

typedef NS_ENUM(NSInteger, EXCameraExposureMode) {
  EXCameraExposureLocked = AVCaptureExposureModeLocked,
  EXCameraExposureAuto = AVCaptureExposureModeContinuousAutoExposure,
  EXCameraExposureCustom = AVCaptureExposureModeCustom,
};

typedef NS_ENUM(NSInteger, EXCameraVideoResolution) {
  EXCameraVideo2160p = 0,
  EXCameraVideo1080p = 1,
  EXCameraVideo720p = 2,
  EXCameraVideo4x3 = 3,
};

@interface EXCameraManager : RCTViewManager <RCTBridgeModule, AVCaptureMetadataOutputObjectsDelegate, AVCaptureFileOutputRecordingDelegate, EXFaceDetectorDelegate>

@property(nonatomic, strong) dispatch_queue_t sessionQueue;
@property(nonatomic, strong) AVCaptureSession *session;
@property(nonatomic, strong) AVCaptureDeviceInput *videoCaptureDeviceInput;
@property(nonatomic, strong) AVCaptureStillImageOutput *stillImageOutput;
@property(nonatomic, strong) AVCaptureMovieFileOutput *movieFileOutput;
@property(nonatomic, strong) AVCaptureMetadataOutput *metadataOutput;
@property(nonatomic, strong) id runtimeErrorHandlingObserver;
@property(nonatomic, assign) NSInteger presetCamera;
@property(nonatomic, strong) AVCaptureVideoPreviewLayer *previewLayer;
@property(nonatomic, strong) NSArray *barCodeTypes;
@property(nonatomic, strong) EXCamera *camera;

- (void)initializeCaptureSessionInput:(NSString *)type;
- (void)startSession;
- (void)stopSession;

- (void)onFacesDetected:(NSArray<NSDictionary *> *)faces;

@end
