import React from 'react'

export const useAlert = () => {
    
    const successCreate = () =>{
        return (
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro creado exitosamente',
                showConfirmButton: false,
                timer: 1500
              })
        )
    }

    const deleteAlert = () => {
      Swal.fire({
          title: "Estas seguro?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Eliminar!",
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire(
                  "Eliminado!",
                  "Su registro ha sido eliminado.",
                  "success"
              );
          }
      });
  };
  
  return {
    successCreate,
    deleteAlert
  }
}
