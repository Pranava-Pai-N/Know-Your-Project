# Know Your Project 

**Know Your Project** is a lightweight VS Code extension that helps you visualize your project's architecture instantly. It generates a clean, professional ASCII directory tree that you can use for documentation, README files, or architectural reviews.



## Features

* **Explorer Integration**: Right-click any folder in your sidebar to map it.
* **ASCII Visuals**: Beautifully formatted trees using `├──` and `└──` connectors.
* **Copy to Clipboard**: One-click button to grab your structure and paste it anywhere.
* **Progress Tracking**: Visual loading notification for processing larger directories.
* **Debug Logging**: Simultaneously logs the structure to the VS Code Debug Console for quick inspection.

---

## 🛠 How to Use

1. **Exclude specific files**: Add a **kyp.ignore** file in your project directory to seldctively exclude some files or folders from the folder structure diagram or else you can proceed to **Step 2**
2.  **Open the Explorer**: Navigate to your files in the side bar.
3.  **Select a Folder**: Right-click on the folder you want to visualize.
4.  **Run**: Click on **"Know Your Project"** in the context menu.
5.  **Action**: 
    * Watch the progress notification in the bottom right.
    * Click **"Copy to Clipboard"** to save the text.
    * Or, check the **Debug Console** to see the output.



---

## Example Output

Calling the extension on a standard project folder yields:

```text
backend
├── controllers
│   ├── authController.ts
│   └── userController.ts
├── routes
│   └── api.ts
└── index.ts
```


## Extension Settings

Currently, this extension operates with zero configuration for a "plug-and-play" experience. Planned settings for future releases include:

* **Know-Your-Project.ignore**: Custom list of folders/files to exclude (e.g., `node_modules`, `.git`).
* **Know-Your-Project.maxDepth**: Limit how deep the tree recursion goes.

---

## Known Issues

* **Performance on Massive Folders**: Generating a tree for folders containing massive dependency directories (like `node_modules`) can produce very long strings. It is recommended to run the tool on your `src` or `app` folders for the best results.

---

## Release Notes

### 0.0.1
* Initial release of **Know Your Project**.
* Implemented recursive ASCII tree generation.
* Added Clipboard API integration for easy copying.
* Added Explorer context menu contribution.

---

## Contributing

Found a bug or have a feature request? Please feel free to open an issue or submit a pull request on our repository!

## Developer Details
- Name :  [ Pranava Pai N](https://github.com/pranava-pai-n)

**Have a trouble free time writing folder structures in your project readme files !**