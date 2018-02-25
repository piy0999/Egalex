pragma solidity ^0.4.17;

contract CaseFactory {
    address[] public cases;

    function addCase(string title, string description) public {
        address newCaseAddress = new LawCase(title, description, msg.sender);
        cases.push(newCaseAddress);
    }

    function getCases() public view returns (address[]) {
        return cases;
    }
}

contract LawCase {
    address public client;
    string public title;
    string public description;
    int8 public status;

    function LawCase(string caseTitle, string caseDescription, address creator) public {
        title = caseTitle;
        description = caseDescription;
        status = -1;
        client = creator;
    }
}
