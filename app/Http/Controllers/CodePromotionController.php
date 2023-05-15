<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\CodePromotion;

class CodePromotionController extends Controller
{
    public function generateCode(Request $request, $id)
    {
        $userId = $request->input('user_id');
        $codePromotion = CodePromotion::where('user_id', $userId)->where('promotion_id', $id)->first();

        if ($codePromotion) {
            return response('Código promocional ya generado.');
        }

        $codePromotion = new CodePromotion;
        $codePromotion->user_id = $userId;
        $codePromotion->promotion_id = $id;

        $uniqueId = uniqid(); 
        $hash = hash('sha256', $uniqueId); 

        $codePromotion->code = $hash;
        $codePromotion->active = false;
        $codePromotion->save();

        return response('Código promocional generado exitosamente.');
    }

    public function findCode (Request $request, $id)
    {
        $codePromotion = CodePromotion::where('user_id', $id)->get();

        return response($codePromotion);
    }

    public function activateCode (Request $request, $id)
    {
        $codePromotion = CodePromotion::find($id);

        if (!$codePromotion) {
            return response()->json(['error' => 'Código promocional no encontrado.'], 404);
        }

        if ($codePromotion->active) {
            return response('Este código promocional ya fue canjeado.');
        }

        $codePromotion->active = true;
        $codePromotion->save();

        return response('Código promocional canjeado.');
    }

}