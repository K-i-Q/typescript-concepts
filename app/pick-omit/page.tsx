'use client';

type TPerson = {
    name: string;
    age: number;
}

type TPersonName = Pick<TPerson, "name">;

type TPersonAge = Omit<TPerson, "name">;


export default function PickOmitPage() {
    const handlePrintPerson = () => {
        const person: TPerson = {
            name: 'Carlos',
            age: 28
        };

        const personName: TPersonName = {
            name: 'Guilherme'
        };

        const personAge: TPersonAge = {
            age: 30
        };

        console.log({ person })
        console.log({ anotherPerson: { personName, personAge } })
    }

    handlePrintPerson();
    return (
        <section className="flex flex-col items-center pt-4 h-screen w-full">
            <h1 className="text-4xl">Pick and Omit Example</h1>
        </section>
    )
}