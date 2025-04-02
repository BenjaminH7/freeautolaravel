import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function ListCar() {
    const { auth } = usePage<SharedData>().props;

    interface Car {
        id: number;
        brand: string;
        model: string;
        year: number;
        color: string | null;
        price: number | null;
        created_at: string;
        updated_at: string;
    }

    interface Props {
        cars: Car[];
    }
    const { cars } = usePage().props as unknown as Props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                 <main>
                     <div className="container mx-auto p-4">
                         <h1 className="text-2xl font-bold mb-4">Liste des voitures</h1>

                         {cars.length > 0 ? (
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                 {cars.map((car) => (
                                     <div key={car.id} className="border p-4 rounded shadow">
                                         <h2 className="text-xl font-semibold">{car.brand} {car.model}</h2>
                                         <p>Année: {car.year}</p>
                                         {car.color && <p>Couleur: {car.color}</p>}
                                         {car.price && <p>Prix: {car.price} €</p>}
                                     </div>
                                 ))}
                             </div>
                         ) : (
                             <p>Aucune voiture disponible.</p>
                         )}
                     </div>

                 </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
