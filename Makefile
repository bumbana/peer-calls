BUILD_FLAGS := -ldflags "-X main.GitDescribe=$(shell cat version.txt)" -o peer-calls

.PHONY: coverage report build build-linux lint lint-env-variables

build:
	go build $(BUILD_FLAGS)

build-linux:
	GOOS=linux GOARCH=amd64 go build $(BUILD_FLAGS)

coverage:
	go test ./... -coverprofile=coverage.out

report:
	go tool cover -html=coverage.out

lint: lint-env-variables

lint-env-variables:
	scripts/lint-env-variables.sh
