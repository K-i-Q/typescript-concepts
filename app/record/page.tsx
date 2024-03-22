type TButton = {
    name: string;
    type: string;
    color: string;
    placeholder: string;
}

type TButtonRecord = Record<'name' | 'type' | 'color' | 'placeholder', string>;

export default function RecordPage() {

    return (
        <section className="flex flex-col items-center pt-4 h-screen w-full">
            <h1 className="text-4xl">Record Example</h1>
        </section>
    )
}