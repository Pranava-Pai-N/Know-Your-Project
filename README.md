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
* `Project Launch`: Debuted the initial release of Know Your Project, establishing the core infrastructure for the extension.

* `Visual Structure`: Implemented a recursive algorithm to generate clean ASCII tree representations of project directories.

* `Workflow Efficiency`: Integrated the Clipboard API, allowing users to instantly copy their project structure with one click.

* `Editor Integration`: Added an Explorer context menu contribution, enabling users to trigger the generation directly from the VS Code file sidebar.
---

### 0.0.2
* `Visual Identity`: Integrated the official extension icon to improve branding and visibility in the VS Code Marketplace.

* `Stability Improvements`: Implemented a series of minor bug fixes to enhance general performance.

* `UI Refinement`: Adjusted internal assets to ensure a more polished user interface.

* `Code Maintenance`: Cleaned up initial codebase fragments to prepare for the major 1.0.0 release.
---

### 1.0.0
* `Production Baseline`: Established the first stable major release version for general use.

* `Structural Optimization`: Executed minor file organization changes to streamline the extension’s internal architecture.

* `Roadmap Alignment`: Prepared the logic for upcoming advanced features, such as custom ignore files.

* `Release Readiness`: Finalized the core feature set and validated the extension's primary scaffolding workflows.
---

### 1.0.1
* `Command Logic Fix`: Resolved a critical bug in the command naming convention that hindered the "copy" functionality.

* `Improved File Handling`: Fixed an issue that prevented users from successfully copying specific folder structures.

* `Reliability Update`: Ensured that the directory cloning process correctly identifies source paths without naming conflicts.

* `UX Patch`: Eliminated friction in the copy-paste workflow to ensure a seamless project setup.
---
### 1.0.2
* `Selective Filtering`: Introduced support for a .kyp.ignore file to allow manual exclusion of specific files and folders.

* `Enhanced Visualization`: Optimized the project structure diagram by filtering out irrelevant or sensitive metadata.

* `Customization Power`: Granted users granular control over which directory parts are processed by the extension.

* `Project Cleanliness`: Automated the removal of "noise" files from generated output, focusing only on relevant code structures.
---
### 1.0.3
* `Stability Milestone`: Finalized all core functionalities to establish the extension's first fully stable production build.

* `Documentation Overhaul`: Extensively revised the README.md to provide clearer setup instructions and usage examples for new users.

* `Polish & Optimization`: Implemented a series of minor bug fixes to eliminate edge-case errors discovered during the 1.0.x rollout.

* `UX Refinement`: Validated all UI elements and command labels to ensure a consistent and professional user experience.

## Contributing

Found a bug or have a feature request? Please feel free to open an issue or submit a pull request on our repository!

## Developer Details
- Name :  [ Pranava Pai N](https://github.com/pranava-pai-n)

**Have a trouble free time writing folder structures in your project readme files !**