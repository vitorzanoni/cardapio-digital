package devweb.cardapiodigitalapi.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import devweb.cardapiodigitalapi.model.Cardapio;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ItemDTO {

    private String nome;

    private String descricao;

    private BigDecimal valor;

    private String imagem;

    private String tipo;

    public ItemDTO(Cardapio item) {
        this.nome = item.getNome();
        this.descricao = item.getDescricao();
        this.valor = item.getValor();
        this.imagem = item.getImagem();
        this.tipo = item.getTipo();
    }

    public static List<ItemDTO> toDTO(List<Cardapio> itens) {
        return itens.stream().map(ItemDTO::new).collect(Collectors.toList());
    }


}
