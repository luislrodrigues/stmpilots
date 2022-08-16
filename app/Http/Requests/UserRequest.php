<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ApiResponser;
use Illuminate\Contracts\Validation\Validator as ValidationValidator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
        switch ($this->method()) {
            case 'POST':
                return [
                'name'                   => ['bail','required','string'],
                'email'                  => ['bail','required','email',Rule::unique('users')->whereNull('deleted_at')],
                'username'               => ['bail','required','string','alpha_dash',Rule::unique('users')->whereNull('deleted_at')],
                'password'               => ['bail','required','min:4'],
                'firm'                   => ['bail','required','string'],
                'category_id'            => ['bail','required','numeric','exists:categories,id'],
                'role_id'                => ['bail','required','numeric','exists:roles,id'],
                ];
              break;
            case 'PUT':
                return [
                    'name'               => ['bail','required','string'],
                    'email'              => ['bail','required','email',Rule::unique('users')->ignore(request('user'))->whereNull('deleted_at')],
                    'username'           => ['bail','required','string','alpha_dash',Rule::unique('users')->ignore(request('user'))->whereNull('deleted_at')],
                    'password'           => ['bail','required','min:4'],
                    'firm'               => ['bail','required','string'],
                    'category_id'        => ['bail','required','numeric','exists:categories,id'],
                    'role_id'            => ['bail','required','numeric','exists:roles,id'],
                    ];
              break;
            default:
            return [
                'name'                  => ['bail','required','string'],
                'email'                 => ['bail','required','email',Rule::unique('users')->whereNull('deleted_at')],
                'username'              => ['bail','required','string','alpha_dash',Rule::unique('users')->whereNull('deleted_at')],
                'password'              => ['bail','required','min:4'],
                'firm'                  => ['bail','required','string'],
                'category_id'           => ['bail','required','numeric','exists:categories,id'],
                'role_id'               => ['bail','required','numeric','exists:roles,id'],
                ];
              break;
        }
    }
    public function failedValidation(ValidationValidator $validator) {
        $message = $validator->errors()->first();
        throw new HttpResponseException($this->showMessage($message, 500, false));
    }
}
