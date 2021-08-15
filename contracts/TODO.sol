// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TODO {
    struct Task {
        string name;
        bool completed;
    }
    
    Task[] public tasks;
    
    constructor() {}
    
    function set(string memory _newTask) public {
        Task memory newTask = Task({ name: _newTask, completed: false });
        tasks.push(newTask);
    }
    
    function complete(uint8 _index) public {
        tasks[_index].completed = true;
    }
    
    function getAll() public view returns (Task[] memory) {
        return tasks;
    }
}
