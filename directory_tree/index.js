(function() {
    const DIRECTORY_STRUCTURE =  {
        "root": {
            "folder1": {
                "subfolder1": {
                    "file1.txt": "This is file 1",
                    "file2.txt": "This is file 2"
                },
                "subfolder2": {
                    "file3.txt": "This is file 3"
                }
            },
            "folder2": {
                "file4.txt": "This is file 4"
            },
            "file5.txt": "This is file 5"
        }
    };

    const renderContainer = document.getElementById('render-container');

    function appendNode(keyRef, value, tabSize) {
        const pNode = document.createElement('p');
        pNode.innerText = `${keyRef}: ${typeof value === 'string' ? value : ''}`;
        pNode.style.marginLeft = `${tabSize * 10}px`
        renderContainer.appendChild(pNode);
    }

    // Do a pre traversal through the tree to print the structure
    function renderTree(rootNode, tabSize = 0) {
        for (const [key, value] of Object.entries(rootNode)) {
            appendNode(key, value, tabSize);
            if (typeof value === 'object' && value !== null) {
                renderTree(rootNode[key], tabSize + 5);
            }
        }
    }

    function renderDirectoryTree() {
        renderTree(DIRECTORY_STRUCTURE);
    }


    // Leverage a DFS approach to iterate through the tree
    renderDirectoryTree();

})();