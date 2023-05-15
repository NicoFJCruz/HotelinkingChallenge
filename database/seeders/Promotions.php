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
                'description' => "Aprovecha esta oferta exclusiva y sumérgete en una experiencia inolvidable en el Hotel Sol Naciente, un establecimiento de lujo con una clasificación de 5 estrellas. Disfruta de un descuento increíble del 45% para una estadía de ensueño para 2 (dos) personas durante 3 (tres) noches. ¡Ven y vive unas vacaciones inolvidables en el Hotel Sol Naciente!",
                "type" => "hotels",
                "image"=>"https://c.wallhere.com/photos/e6/05/1440x1437_px_art_Beautiful_colors_Oil_table-1557607.jpg!d"
            ],
            [
                "title" => "Hotel El Atardecer (4 estrellas)",
                'description' => "Obtén un increíble descuento del 30% para una estadía de 6 noches para dos personas, con desayuno incluido. Disfruta de una experiencia única en un entorno idílico, donde podrás relajarte y desconectar del estrés diario. El Hotel El Atardecer te ofrece todas las comodidades necesarias para que tu estancia sea inolvidable.",
                "type" => "hotels",
                "image"=>"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aafb6d101336491.5f1c7015dd816.jpg"

            ],
            [
                "title" => "Hotel Don Quijote (5 estrellas)",
                'description' => "¡No dejes pasar esta oportunidad única! Obtén un increíble descuento del 60% para una estancia de 2 noches para dos personas, con desayuno incluido. El Hotel Don Quijote es conocido por su elegancia y confort, brindando a sus huéspedes una experiencia inigualable. Descansa en habitaciones de lujo decoradas con buen gusto y equipadas con todas las comodidades modernas que necesitas para una estadía placentera.",
                "type" => "hotels",
                "image"=>"https://i.pinimg.com/736x/f5/11/c5/f511c5f773c0bb83f9726fd7f514a674.jpg"

            ],
            [
                "title" => "Excursión a Villa Paraíso",
                'description' => "¡Prepárate para una experiencia inolvidable en Villa Paraíso! Disfruta de una oferta exclusiva con un descuento del 60% para una excursión para dos personas, que incluye una deliciosa comida. Villa Paraíso es un destino único que combina la belleza natural con actividades emocionantes. Sumérgete en la exuberante naturaleza mientras exploras senderos panorámicos, cascadas impresionantes y paisajes de ensueño.",
                "type" => "excursion",
                "image"=>"https://i.pinimg.com/originals/01/74/a5/0174a5ff0e3fe581ec614dc5cc729ba8.jpg"
            ]
        ]);
    }
}
