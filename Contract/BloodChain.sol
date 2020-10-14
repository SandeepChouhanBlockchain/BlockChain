pragma solidity >=0.4.22 <0.6.0;
contract BloodChain{
    
     modifier checkDonar (uint256 _aadharNo)
    {
        require(DonarMap[_aadharNo].aadharNo != _aadharNo, "Aadhar no. Already Exsists.");
        _;
    }
    struct Donar
    {
      uint256 aadharNo;
      uint256 age;
      string donarName;
      string donarAddress;
      string bloodGroup;
      uint256 status;
      string state;
      uint256 mobileno;
    }
    
    uint256[] public DonarArray;
    
    mapping(uint256=> Donar) DonarMap;
    
    function setDonorDetails(uint256 _aadharNo,uint256 _age,string memory _donarName,string memory _donarAddress,string memory _bloodGroup,uint256 _status, string memory _state, uint256 _mobileno) public checkDonar(_aadharNo) returns(bool){
        DonarMap[_aadharNo].aadharNo = _aadharNo;
        DonarMap[_aadharNo].age = _age;
        DonarMap[_aadharNo].donarName = _donarName;
        DonarMap[_aadharNo].donarAddress = _donarAddress;
        DonarMap[_aadharNo].bloodGroup = _bloodGroup;
        DonarMap[_aadharNo].status = _status;
        DonarMap[_aadharNo].state = _state;
        DonarMap[_aadharNo].mobileno = _mobileno;
        DonarArray.push(_aadharNo);
        return true;
    }


    function setDonor(uint256 _aadharNo) public returns(bool){
        DonarMap[_aadharNo].aadharNo = _aadharNo;
        DonarArray.push(_aadharNo);
        return true;
    }
    
    function getRegisterDonorArray() public view returns(uint256[] memory ){
        return DonarArray;
    }
    function getRegisterDonorArrayLength() public view returns(uint256){
        return DonarArray.length;
    }
    
    function getRegisterDonarById(uint256 _aadharNo) public view returns(uint256 _age, string memory _donarName, string memory _donarAddress,string memory _bloodGroup,uint256 _status,string memory _state, uint256 _mobileno){
        _aadharNo = DonarMap[_aadharNo].aadharNo;
        _age = DonarMap[_aadharNo].age;
        _donarName = DonarMap[_aadharNo].donarName;
        _donarAddress = DonarMap[_aadharNo].donarAddress;
        _bloodGroup = DonarMap[_aadharNo].bloodGroup;
        _status= DonarMap[_aadharNo].status;
        _state = DonarMap[_aadharNo].state;
        _mobileno = DonarMap[_aadharNo].mobileno;
    }
    
    function verifyDonor(uint256 _aadharNo) public  returns(bool){
        DonarMap[_aadharNo].status = 1;
        return true;
    }
    
    
    struct bloodRequest{
        uint256 requestBloodGroupId;
        uint256 hospitalId;
        string hospitalName;
        string bloodGroup;
        uint256 availableStatus;
        uint256 donorId;
    }
    
    uint256[] public BloodRequestArray;
    mapping(uint256=> bloodRequest) BloodRequestMap;
    uint256 public requestBloodGroupId;
    
    function addBloodGroupRequest(uint256 _hospitalId, string memory _hospitalName, string memory _bloodGroup, uint256 _availableStatus) public returns(bool) {
        BloodRequestMap[requestBloodGroupId].requestBloodGroupId = requestBloodGroupId;
        BloodRequestMap[requestBloodGroupId].hospitalId = _hospitalId;
        BloodRequestMap[requestBloodGroupId].hospitalName = _hospitalName;
        BloodRequestMap[requestBloodGroupId].bloodGroup = _bloodGroup;
        BloodRequestMap[requestBloodGroupId].availableStatus = _availableStatus;
        BloodRequestArray.push(requestBloodGroupId);
        requestBloodGroupId++;                      
        return true;
    }
    
    function getBloodGroupRequestArray() public view returns(uint256[] memory ){
        return BloodRequestArray;
    }
    function getBloodGroupRequestArrayLength() public view returns(uint256){
        return BloodRequestArray.length;
    }
    
    function getBloodGroupRequestById(uint256 _requestBloodGroupId) public view returns(uint256 _hospitalId, string memory _hospitalName, string memory _bloodGroup, uint256 _availableStatus)
    {
        _hospitalId = BloodRequestMap[_requestBloodGroupId].hospitalId;
        _hospitalName = BloodRequestMap[_requestBloodGroupId].hospitalName;
        _bloodGroup = BloodRequestMap[_requestBloodGroupId].bloodGroup;
        _availableStatus = BloodRequestMap[_requestBloodGroupId].availableStatus;
    }
    
    function approveBloodRequest(uint256 _requestBloodGroupId) public returns(bool){
        BloodRequestMap[_requestBloodGroupId].availableStatus = 1;
        return true;
    }
    
    function rejectBloodRequest(uint256 _requestBloodGroupId) public returns(bool){
        BloodRequestMap[_requestBloodGroupId].availableStatus = 2;
        return true;
    }
    
}