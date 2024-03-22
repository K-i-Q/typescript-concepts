'use client';

type TPerson = {
    name: string;
    age: number;
}

type TAddress = {
    city: string;
    zipCode: string;
}

type TCustomer = TPerson & TAddress;

export default function IntersectionPage(){
    const handlePrintCustomer = () =>{
        const newCustomer: TCustomer = {
            name: 'Carlos',
            age: 28,
            city: 'Fazenda Rio Grande',
            zipCode: '999999'
        }
        console.log(newCustomer);
    }

    handlePrintCustomer();

    return (
        <div>
            Intersection Example
        </div>
    )
}