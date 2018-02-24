pragma solidity ^0.4.17;

contract CaseFactory {
    struct Case {
        string title;
        string description;
        address caseAddress;
        int8 status;
    }

    Case[] public cases;

    function addCase(string title, string description) public {
        address newCaseAddress = new LawCase(title, description, msg.sender);
        Case memory newCase = Case({
            title: title,
            description: description,
            caseAddress: newCaseAddress,
            status: -1
        });
        cases.push(newCase);
    }

    function getCases() public view returns (Case[]) {
        return cases;
    }
}

contract LawCase {
    address public client;
    string public title;
    string public description;

    function LawCase(string caseTitle, string caseDescription, address creator) public {
        title = caseTitle;
        description = caseDescription;
        client = creator;
    }
}
