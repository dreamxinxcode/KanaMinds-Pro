build_android:
	export CAPACITOR_ANDROID_STUDIO_PATH=/usr/bin/android-studio
	ionic capacitor sync
	npx cap copy android
	npx cap open android
	ionic capacitor build android
	# In Android Studio - Build > Build Bundle(s) / APK(s) > Build APK(s)

resources:
	# npm install capacitor-resources -g
	capacitor-resources
	npx cap sync android
	npx capacitor-assets generate