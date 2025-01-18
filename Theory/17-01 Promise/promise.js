// const promiseObject = new Promise(executerFunction)
// function executerFunction(resolve, reject)
// {
//     if (true)
//     {
//         resolve("Everything is working fine");
//     }
//     else
//     {
//         reject("Oops we got some error");
//     }
// }

// function resolveHandler(value)
// {
//     console.log(value);
// }

// function rejectHandler(value)
// {
//     console.log(value);
// }

// promiseObject.then(resolveHandler)
//     .catch(rejectHandler)
//     .finally(() => console.log("It will be called everytime."));

// function promiseReturningFunction(url)
// {
//     return new Promise((resolve, reject) =>
//     {
//         if (true)
//         {
//             resolve("Data fetched from " + url);
//         }
//         else
//         {
//             reject("Error occured");
//         }
//     })
// }

// promiseReturningFunction("dummy.com")
//     .then((value) =>
//     {
//         console.log(value);
//     })
//     .catch((err) =>
//     {
//         console.error(err);
//     })


//Callback hell
// function getUsersDetail(userId, callback)
// {
//     console.log("Fetched user details succesfully");
//     callback("U001 details");
// }

// function getPost(postId, callback)
// {
//     console.log("Post detail fetched");
//     callback("P001 details");
// }

// function getComments(userId, callback)
// {
//     console.log("Comments detail fetched");
//     callback(["Comment-1", "Comment-2", "Comment-3"]);
// }

// getUsersDetail("u001", (useDetails) =>
// {
//     getPost("P001", (postDetail) =>
//     {
//         getComments("U001", (comments) =>
//         {
//             console.log(comments);
//         })
//     })
// })



function getUsersDetail(userId)
{
    return new Promise((resolve, reject) =>
    {
        console.log("user detail fetched");
        if (true)
        {

            resolve("U001 details");
        }
        else
        {
            reject("User not fetched")
        }
    })
}

function getPost(postId)
{
    return new Promise((resolve, reject) =>
    {
        console.log("Post detail fetched");
        if (true)
        {

            resolve("P001 details");
        }
        else
        {
            reject("Post not fetched")
        }
    })
}

function getComments(userId)
{
    return new Promise((resolve, reject) =>
    {
        console.log("Comments detail fetched");
        if (true)
        {

            resolve(["Comment-1", "Comment-2", "Comment-3"]);
        }
        else
        {
            reject("Comments not fetched")
        }
    })
}


// getUsersDetail("U001")
//     .then((userDetails) => getPost("P001"))
//     .then((postDetail) => getComments("U001"))
//     .then((comments) => console.log(comments))
//     .catch((err) => console.log(err));

async function fetchComment()
{
    try{
        const userdetails = await getUsersDetail('U001');
    const getPost = await getPost("P001");
    const getComment = await getComments("U001");
    console.log(getComment);
    }
    catch{
        console.log(err);
    }
}