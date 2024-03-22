'use client';

function genericFunction<T>(args: T): T {
    return args;
}
export default function GenericPage() {
    const handlePrintGeneric = () => {
        const genericOne = genericFunction({ name: 'Carlos' });

        const genericTwo = genericFunction({ name: 'Carlos', age: 28 });

        const genericThree = genericFunction({ name: 'Carlos', age: '28', city: 'Fazenda Rio Grande' });

        console.log({ genericOne });
        console.log({ genericTwo });
        console.log({ genericThree });
    }
    handlePrintGeneric();
    return (
        <section className="flex flex-col items-center pt-4 h-screen w-full">
            <h1 className="text-4xl">Generic Example</h1>
        </section>
    )
}