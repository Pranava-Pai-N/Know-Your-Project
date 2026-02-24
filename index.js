import fs from "fs";
import path from "path";



const getFolderStructure = (dirPath, indent = "", isRoot = true) => {
    const name = path.basename(dirPath);
    const stats = fs.statSync(dirPath);
    const isDirectory = stats.isDirectory();


    let result = isRoot ? name + "\n" : "";

    if (isDirectory) {
        const items = fs.readdirSync(dirPath);


        const ignoreFile = items.find(name => name === "kyp.ignore");

        let filestoexclude = [];

        if (ignoreFile) {
            const ignorePath = path.join(dirPath, ignoreFile);

            filestoexclude = fs.readFileSync(ignorePath, 'utf-8').split(/\r?\n/).map(line => line.trim().replace(/\/$/, '')).filter(line => line.length > 0);
        }

        const filteredItems = items.filter(item =>
            item !== ignoreFile && !filestoexclude.includes(item)
        );

        filteredItems.forEach((item, index) => {
            const isLastIndex = index === filteredItems.length - 1;

            const itemPath = path.join(dirPath, item);

            const isChildDirectory = fs.statSync(itemPath).isDirectory();

            const connector = isLastIndex ? "└── " : "├── ";

            result += `${indent}${connector}${item}\n`;

            if (isChildDirectory) {
                const newIndent = indent + (isLastIndex ? "    " : "│   ");

                result += getFolderStructure(itemPath, newIndent, false);
            }
        });
    }

    return result;
};


export default getFolderStructure;