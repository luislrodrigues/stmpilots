<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ApiResponser;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class AgencyRequest extends FormRequest
{
    use ApiResponser;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        {
            switch ($this->method()) {
                case 'POST':
                    return [
                    'name'                   => ['bail','required','string'],
                    ];
                  break;
                case 'PUT':
                    return [
                        'name'               => ['bail','required','string'],
                        ];
                  break;
                default:
                return [
                    'name'                  => ['bail','required','string'],
                    ];
                  break;
            }
        }
    }    
    public function failedValidation(ValidationValidator $validator) {
        $message = $validator->errors()->first();
        throw new HttpResponseException($this->showMessage($message, 500, false));
    }
}
