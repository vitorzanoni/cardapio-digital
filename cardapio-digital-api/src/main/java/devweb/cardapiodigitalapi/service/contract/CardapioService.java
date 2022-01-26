package devweb.cardapiodigitalapi.service.contract;

import java.util.List;

import devweb.cardapiodigitalapi.dto.ItemDTO;

public interface CardapioService {

    List<ItemDTO> findItens(String nome);

    void alterarItem(Long id, ItemDTO itemDTO);

    void deleteItem(Long id);

    void insertItem(ItemDTO itemDTO);

}
