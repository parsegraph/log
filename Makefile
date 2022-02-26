DIST_NAME = log

SCRIPT_FILES = \
	src/TreeLog.ts \
	src/index.ts \
	src/WebsocketTreeLog.ts \
	src/NoopTreeLog.ts \
	src/Logger.ts \
	src/demo.ts \
	test/test.ts

EXTRA_SCRIPTS =

include ./Makefile.microproject
