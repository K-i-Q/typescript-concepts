'use client';

type TPerson = {
    name: string;
    age: number | string;
}

type TAddress = {
    city: string;
    zipCode: string | number;
}

type TCustomer = TPerson & TAddress;

export default function UnionPage(){
    const handlePrintCustomer = () =>{
        const oneCustomer: TCustomer = {
            name: 'Carlos',
            age: '28',
            city: 'Fazenda Rio Grande',
            zipCode: 88888
        }
        const anotherCustomer: TCustomer = {
            name: 'Rodrigo',
            age: 30,
            city: 'São José dos Pinhais',
            zipCode: '999999'
        }
        console.log({oneCustomer});
        console.log({anotherCustomer});
    }

    handlePrintCustomer();

    return (
        <div>
            Union Example
        </div>
    )
}