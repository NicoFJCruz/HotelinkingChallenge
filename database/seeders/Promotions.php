<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Promotions extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('promotions')->insert([
            [
                "title" => "Hotel Sol Naciente (5 estrellas)",
                'description' => "Oferta exclusiva, 45% de dto para dos personas por 3 noches con desayuno incluído, gym, pileta climatizada. El mejor hotel de la zona al mejor precio. No te lo pierdas. Cupos limitados.",
            ],
            [
                "title" => "Hotel El Atardecer (4 estrellas)",
                'description' => "Oferta exclusiva, 30% de dto para dos personas por 6 noches con desayuno incluído. No te lo pierdas. Cupos limitados.",
            ],
            [
                "title" => "Hotel Don Quijote (5 estrellas)",
                'description' => "Oferta exclusiva, 60% de dto para dos personas por 2 noches con desayuno incluído. No te lo pierdas. Cupos limitados.",
            ]
        ]);
    }
}
