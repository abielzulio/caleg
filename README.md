# Caleg

An unofficial API Node.js SDK for getting the list of candidates for the 2024 Indonesian General Election. REST API is provided by [Zakiego](https://caleg.zakiego.com/).

## Installation

```bash
npm install caleg
```

## Usage

```typescript
import { Caleg } from "caleg"

const caleg = new Caleg()
```

### DPD

```typescript
const dapiList = await caleg.dpd.dapil.list()
const dapil = await caleg.dpd.dapil.get("11")
const calon = await caleg.dpd.calon.get("aceh/6")
```

### DPR

```typescript
const dapiList = await caleg.dpr.dapil.list()
const dapil = await caleg.dpr.dapil.get("1101")
const calon = await caleg.dpr.calon.get("aceh-i/partai-kebangkitan-bangsa/6")
```
