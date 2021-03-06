package devweb.cardapiodigitalapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devweb.cardapiodigitalapi.dto.ItemDTO;
import devweb.cardapiodigitalapi.model.Cardapio;
import devweb.cardapiodigitalapi.repository.CardapioRepository;
import devweb.cardapiodigitalapi.service.contract.CardapioService;

@Service
public class CardapioServiceImpl implements CardapioService {

    @Autowired
    private CardapioRepository cardapioRepository;

    public List<ItemDTO> findItens(String nome, String tipo) {
        if (nome != null) {
            return ItemDTO.toDTO(cardapioRepository.findByNome(nome));
        }
        if (tipo != null) {
            return ItemDTO.toDTO(cardapioRepository.findByTipo(tipo));
        }
        return ItemDTO.toDTO(cardapioRepository.findAll());
    }

    @Override
    public void deleteItem(Long id) {
        cardapioRepository.deleteById(id);
    }

    @Override
    public void insertItem(ItemDTO cardapioDTO) {
        Cardapio item = new Cardapio();
        item.setDescricao(cardapioDTO.getDescricao());
        item.setImagem(cardapioDTO.getImagem());
        item.setNome(cardapioDTO.getNome());
        item.setValor(cardapioDTO.getValor());
        item.setTipo(cardapioDTO.getTipo());
        cardapioRepository.save(item);

    }

    @Override
    public void alterarItem(Long id, ItemDTO cardapioDTO) {
        Cardapio item = cardapioRepository.getById(id);
        item.setDescricao(cardapioDTO.getDescricao());
        item.setImagem(cardapioDTO.getImagem());
        item.setNome(cardapioDTO.getNome());
        item.setValor(cardapioDTO.getValor());
        item.setTipo(cardapioDTO.getTipo());
        cardapioRepository.save(item);
    }

}
