#include <emscripten/emscripten.h>

extern "C" {
    EMSCRIPTEN_KEEPALIVE
    int performComputation(int x, int y) {
        return x * y; // example computation
    }
}
