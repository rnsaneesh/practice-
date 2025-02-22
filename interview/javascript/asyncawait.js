/*function asaw(){
    console.log("hello");
}
asaw();*/

/*async function asaw() {
    
    console.log("hello");
    
}
console.log(asaw());//output hello 
                    //promise {undefined}*/

/*
        async function asaw() {
            setTimeout(function(){
                console.log("hello");
            },5000);
            
        }
        console.log(asaw());*/


/*
likeCode=async()=>{
    return new Promise((likePost)=>{
        setTimeout(()=>{
            likePost("Liked the post")
        },3000)
    })
}
commentCode=async()=>{
    return new Promise((commentPost)=>{
        setTimeout(()=>{
            commentPost("Commented the post")
        },3000)
    })
}
shareCode=async()=>{
    return new Promise((sharePost)=>{
        setTimeout(()=>{
            sharePost("Shared the post")
        },3000)
    })
}
async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(()=>{
            createPost("Post created successfully");
        },5000)
    })
    var [post,like,comment,share]=await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(post)
    console.log(like)
    console.log(comment)
    console.log(share)
}
postCode()*/

likeCode = async () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Failed to like the post");
        }, 3000);
    });
};

commentCode = async () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Failed to comment on the post");
        }, 3000);
    });
};

shareCode = async () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Failed to share the post");
        }, 3000);
    });
};

async function postCode() {
    var post = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Failed to create post");
        }, 5000);
    });

    try {
        var [postResult, like, comment, share] = await Promise.all([
            post,
            likeCode(),
            commentCode(),
            shareCode()
        ]);
        console.log(postResult);
        console.log(like);
        console.log(comment);
        console.log(share);
    } catch (error) {
        console.error("Error:", error);
    }
}

postCode();
