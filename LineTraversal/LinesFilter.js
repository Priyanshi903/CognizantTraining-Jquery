$(document).ready(function(){
    $("#search").click(function(){
        var words=$("#text1").val();
        const word_array=words.split(",");
        var ans=""
        var whole_text= $("#text2").val();
        var sentences= whole_text.split(/\n/);
        // var sentences= whole_text.split(".");
        console.log(sentences)
        for (let i = 0; i < sentences.length; i++) {
            for (let j = 0; i < word_array.length; j++) {
                if(sentences[i].includes(word_array[j])){
                    console.log("true")
                    var first=""
                    var second=""
                    var sp=sentences[i].split(word_array[j])
                    first=sp[0]
                    second=sp[1]
                    ans+=first+"<b>"+word_array[j]+"</b>"+second+", "
                    console.log(ans)
                }
            }
          }
        // $("#text3").text(ans)
        $("#text3").val(ans)
    })
})