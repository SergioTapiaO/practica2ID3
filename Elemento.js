class Elemento{

    constructor(nombre, a, p, n, N){
        this.name = nombre;
        this.a = a;
        this.p = p/a;
        this.n = n/a;
        this.total = N;
        this.r = a/N;
        this.merito = this.calcularMerito()
    }

    calcularMerito(){
        if(this.p == 0 || this.n == 0)
            return 0;
        return this.r*(-this.p*Math.log2(this.p) - this.n*Math.log2(this.n));
    }

    get_merito(){
        return this.merito;
    }
}