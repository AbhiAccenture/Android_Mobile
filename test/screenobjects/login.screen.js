
class LoginScreen {
 
  get allowButton(){
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]')
  }
  get signInButton(){
    return $('//android.widget.Button[@content-desc="Sign in"]')
  }
  get permissionButton(){
    return $('//android.widget.Button[@resource-id="appPreviewBtn"]')
  }
  get permissionAllowButton(){
    return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]')
  }
}

module.exports = new LoginScreen();
