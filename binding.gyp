{
  "targets": [{
    "target_name": "electron_cpp",
    "cflags!": ["-fno-exceptions"],
    "cflags-cc!": ["-fno-exceptions"],
    "sources": [
      "src/main.cpp"
    ],
    "include_dirs": [
      "<!@(node -p \"require('node-addon-api').include\")"
    ],
    "libraries": [],
    "dependencies": [
      "<!(node -p \"require('node-addon-api').gyp\")"
    ],
    "defines": [ "NAPI_DISABLE_CPP_EXCEPTIONS" ]
  }]
}