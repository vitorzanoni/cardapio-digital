package devweb.cardapiodigitalapi.dto;

import devweb.cardapiodigitalapi.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RoleDTO {

    private String role;

    public RoleDTO(Usuario usuario){

        this.role = usuario.getFuncao();
    }
}
