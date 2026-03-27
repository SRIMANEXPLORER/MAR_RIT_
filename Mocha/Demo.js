 describe("All Suite",function(){

    it("Test case 1",function(){
        console.log("Test 1 - create acc")
    })
    
    it("Test case 2",function(){
        console.log("Test 1 - login....")
    })

    before("Before suite...",function(){
        console.log("Browser Launch...")
    })

    after("After suite...",function(){
        console.log("Close Browser...")
    })
    beforeEach("Before suite...",function(){
        console.log("Browser Test...")
    })
    afterEach("After suite...",function(){
        console.log("Browser Test done...")
    })


 });