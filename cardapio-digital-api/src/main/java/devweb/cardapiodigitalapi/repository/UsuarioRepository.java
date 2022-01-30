package devweb.cardapiodigitalapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import devweb.cardapiodigitalapi.model.Usuario;
import devweb.cardapiodigitalapi.repository.custom.UsuarioRepositoryCustom;

public interface UsuarioRepository extends UsuarioRepositoryCustom, JpaRepository<Usuario, Long>{

    Optional<Usuario> findByUserAndSenha(String user, String senha);    
}
