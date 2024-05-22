class math{
    constructor(a,b){
        this.a = a
        this.b = b
    }

    plus(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(this.a + this.b)
            }, 1000)
        })
    }

    print(){
        return (
            this.plus().then(
                (result) => {console.log(result)},
                (error) => {console.log(error)}
            )
        )
    }
}


let abc = new math(1,2)

abc.print()

