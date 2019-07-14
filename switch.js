<script>
(function(){
    do{
    var weekday=prompt("enter the day of the week.(use 0-6 number only)");

    switch(Number(weekday)){
        case 0:
            console.log("Its a casual wear day")
            break;
            case 1:
            case 3:
            console.log("Its a formal wear day")
            break;
            case 2:
            console.log("Its a office formal day")
            break;
            default:
            console.log("enter a valid weekday between 0-6");
            break;   
    };
    var ans = confirm("do you wish to continue")
    //console.log(ans);
    }while(ans);
})
</script>