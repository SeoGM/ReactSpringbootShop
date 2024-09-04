#!/bin/bash

cd shop/backend

# Install SDKMAN and set up Java 17
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
yes | sdk install java 17.0.4-tem

./gradlew build -x test

./gradlew bootRun
