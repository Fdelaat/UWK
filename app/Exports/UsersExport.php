<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Contracts\Support\Responsable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class UsersExport implements FromCollection, WithHeadings, ShouldAutoSize, Responsable
{
    use Exportable;

    public function headings(): array
    {
        return [
            '#',
            'User',
            'Email',
            'Email verified at',
            'Role',
            'Created at',
            'Updated at',
        ];
    }

    public function collection()
    {
        return User::all();
    }
}
