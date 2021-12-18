export default function getAllPerosn(req,res){
    const person = [
        {
            name: "shuvo",
            address: "dhaka"
        },
        {
            name: "mahbub",
            address: "dhaka"
        },
        {
            name: "salam",
            address: "meherpur"
        },
        {
            name: "naim",
            address: "meherpur"
        },
    ]
    res.status(200).send(person);
 }