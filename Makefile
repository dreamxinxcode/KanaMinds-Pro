.PHONY: install web ios android build_web build_ios build_android clean

install:
	npm install

web:
	npx expo start --web

ios:
	npx expo start --ios

android:
	npx expo start --android

build_web:
	npx expo build:web

build_ios:
	npx expo build:ios

build_android:
	npx expo build:android

clean:
	rm -rf node_modules
	npm cache clean --force
	npx expo r -c