import fs from "fs";
import path from "path";



const getFolderStructure = (dirPath, indent = "" , isRoot = true) => {
    const name = path.basename(dirPath);
    const stats = fs.statSync(dirPath);
    const isDirectory = stats.isDirectory();
    
    let result = isRoot ? name + "\n" : "";

    if (isDirectory) {
        const items = fs.readdirSync(dirPath);
        
        items.forEach((item, index) => {

            if(item === "node_modules" || item === ".git" || item === "dist" || item.startsWith(".env")){
                return ;
            }
            
            const isLastIndex = index === items.length - 1;

            const itemPath = path.join(dirPath, item);

            const isChildDirectory = fs.statSync(itemPath).isDirectory();
            
            const connector = isLastIndex ? "└── " : "├── ";

            result += `${indent}${connector}${item}\n`;

            if (isChildDirectory) {
                const newIndent = indent + (isLastIndex ? "    " : "│   ");
                
                result += getFolderStructure(itemPath, newIndent,false);
            }
        });
    }

    return result;
};


export default getFolderStructure;