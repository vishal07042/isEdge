# Edge Environment Simulator

A Chrome extension that simulates the Edge browser environment by injecting an `isEdge()` function into web pages.

## Features

-   Injects a non-configurable, non-writable `isEdge()` function that always returns `true`
-   Works on all web pages
-   Runs at document start to ensure early injection
-   Uses MAIN world injection for maximum compatibility

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## How it Works

The extension consists of three main files:

-   `manifest.json`: Configures the extension and its permissions
-   `content.js`: Injects the `isEdge()` function into web pages
-   `background.js`: Handles extension installation logging

The `isEdge()` function is injected into the main JavaScript context of every page, making it appear as if the page is running in Edge browser.

## Testing

To verify the extension is working:

1. Install the extension
2. Open any webpage
3. Open the browser's DevTools (F12)
4. In the console, type `isEdge()`
5. The function should return `true`
6. Try to modify the function - it should fail as the function is non-configurable

## Notes

-   The function is made non-configurable and non-writable to prevent websites from overriding it
-   The extension runs at document_start to ensure the function is available as early as possible
-   Uses MAIN world injection to ensure the function is available in the page's JavaScript context
