import { Col, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useCallback, useState } from 'react';
import { Typography } from 'antd';
import './App.css';

export const alphagbet = [
  {
    "character": "α",
    "braille": "⠁",
    "braille_dots": "1"
  },
  {
    "character": "β",
    "braille": "⠃",
    "braille_dots": "12"
  },
  {
    "character": "γ",
    "braille": "⠛",
    "braille_dots": "1245"
  },
  {
    "character": "δ",
    "braille": "⠙",
    "braille_dots": "145"
  },
  {
    "character": "ε",
    "braille": "⠑",
    "braille_dots": "15"
  },
  {
    "character": "ζ",
    "braille": "⠵",
    "braille_dots": "1356"
  },
  {
    "character": "η",
    "braille": "⠜",
    "braille_dots": "345"
  },
  {
    "character": "θ",
    "braille": "⠹",
    "braille_dots": "1456"
  },
  {
    "character": "ι",
    "braille": "⠊",
    "braille_dots": "24"
  },
  {
    "character": "κ",
    "braille": "⠅",
    "braille_dots": "13"
  },
  {
    "character": "λ",
    "braille": "⠇",
    "braille_dots": "123"
  },
  {
    "character": "μ",
    "braille": "⠍",
    "braille_dots": "134"
  },
  {
    "character": "ν",
    "braille": "⠝",
    "braille_dots": "1345"
  },
  {
    "character": "ξ",
    "braille": "⠭",
    "braille_dots": "1346"
  },
  {
    "character": "ο",
    "braille": "⠕",
    "braille_dots": "135"
  },
  {
    "character": "π",
    "braille": "⠏",
    "braille_dots": "1234"
  },
  {
    "character": "ρ",
    "braille": "⠗",
    "braille_dots": "1235"
  },
  {
    "character": "σ",
    "braille": "⠎",
    "braille_dots": "234"
  },
  {
    "character": "ς",
    "braille": "⠎",
    "braille_dots": "234"
  },
  {
    "character": "τ",
    "braille": "⠞",
    "braille_dots": "2345"
  },
  {
    "character": "υ",
    "braille": "⠽",
    "braille_dots": "13456"
  },
  {
    "character": "φ",
    "braille": "⠋",
    "braille_dots": "124"
  },
  {
    "character": "χ",
    "braille": "⠓",
    "braille_dots": "125"
  },
  {
    "character": "ψ",
    "braille": "⠯",
    "braille_dots": "12346"
  },
  {
    "character": "ω",
    "braille": "⠚",
    "braille_dots": "245"
  },
  {
    "character": "ά",
    "braille": "⠐⠁",
    "braille_dots": "5 1"
  },
  {
    "character": "έ",
    "braille": "⠐⠑",
    "braille_dots": "5 15"
  },
  {
    "character": "ή",
    "braille": "⠐⠜",
    "braille_dots": "5 345"
  },
  {
    "character": "ί",
    "braille": "⠐⠊",
    "braille_dots": "5 24"
  },
  {
    "character": "ϊ",
    "braille": "⠊",
    "braille_dots": "24"
  },
  {
    "character": "ΐ",
    "braille": "⠐⠊",
    "braille_dots": "5 24"
  },
  {
    "character": "ό",
    "braille": "⠐⠕",
    "braille_dots": "5 135"
  },
  {
    "character": "ύ",
    "braille": "⠐⠽",
    "braille_dots": "5 13456"
  },
  {
    "character": "ϋ",
    "braille": "⠽",
    "braille_dots": "13456"
  },
  {
    "character": "ΰ",
    "braille": "⠐⠽",
    "braille_dots": "5 13456"
  },
  {
    "character": "ώ",
    "braille": "⠐⠚",
    "braille_dots": "5 245"
  },
  {
    "character": "αι",
    "braille": "⠣",
    "braille_dots": "126"
  },
  {
    "character": "ει",
    "braille": "⠩",
    "braille_dots": "146"
  },
  {
    "character": "οι",
    "braille": "⠪",
    "braille_dots": "246"
  },
  {
    "character": "υι",
    "braille": "⠻",
    "braille_dots": "12456"
  },
  {
    "character": "αυ",
    "braille": "⠡",
    "braille_dots": "16"
  },
  {
    "character": "ευ",
    "braille": "⠱",
    "braille_dots": "156"
  },
  {
    "character": "ηυ",
    "braille": "⠳",
    "braille_dots": "1256"
  },
  {
    "character": "ου",
    "braille": "⠥",
    "braille_dots": "136"
  },
  {
    "character": "1",
    "braille": "⠼⠁",
    "braille_dots": "3456 1"
  },
  {
    "character": "2",
    "braille": "⠼⠃",
    "braille_dots": "3456 12"
  },
  {
    "character": "3",
    "braille": "⠼⠉",
    "braille_dots": "3456 14"
  },
  {
    "character": "4",
    "braille": "⠼⠙",
    "braille_dots": "3456 145"
  },
  {
    "character": "5",
    "braille": "⠼⠑",
    "braille_dots": "3456 15"
  },
  {
    "character": "6",
    "braille": "⠼⠋",
    "braille_dots": "3456 124"
  },
  {
    "character": "7",
    "braille": "⠼⠛",
    "braille_dots": "3456 1245"
  },
  {
    "character": "8",
    "braille": "⠼⠓",
    "braille_dots": "3456 125"
  },
  {
    "character": "9",
    "braille": "⠼⠊",
    "braille_dots": "3456 24"
  },
  {
    "character": "0",
    "braille": "⠼⠚",
    "braille_dots": "3456 245"
  },
  {
    "character": ".",
    "braille": "⠲",
    "braille_dots": "256"
  },
  {
    "character": ",",
    "braille": "⠂",
    "braille_dots": "2"
  },
  {
    "character": ";",
    "braille": "⠢",
    "braille_dots": "26"
  },
  {
    "character": "?",
    "braille": "⠦",
    "braille_dots": "236"
  },
  {
    "character": "·",
    "braille": "⠆",
    "braille_dots": "23"
  },
  {
    "character": ":",
    "braille": "⠒",
    "braille_dots": "25"
  },
  {
    "character": "́",
    "braille": "⠐",
    "braille_dots": "5"
  },
  {
    "character": "(…)",
    "braille": "⠶…⠶",
    "braille_dots": "2356 2356"
  },
  {
    "character": "!",
    "braille": "⠖",
    "braille_dots": "235"
  },
  {
    "character": "–",
    "braille": "⠤",
    "braille_dots": "36"
  },
  {
    "character": "+",
    "braille": "⠮",
    "braille_dots": "2346"
  },
  {
    "character": "/",
    "braille": "⠌",
    "braille_dots": "34"
  },
  {
    "character": "%",
    "braille": "⠒⠏",
    "braille_dots": "25 1234"
  },
  {
    "character": "‰",
    "braille": "⠒⠹",
    "braille_dots": "25 1456"
  },
  {
    "character": "CAPS",
    "braille": "⠨",
    "braille_dots": "46"
  },
  {
    "character": "NUM",
    "braille": "⠼",
    "braille_dots": "3456"
  },
  {
    "character": " ",
    "braille": " ",
    "braille_dots": "3456"
  }
]

const { Title } = Typography;

export const App = () => {

  const [brilleText, setBrilleText] = useState("");

  const isLowerCase = (str: string) => {
    return str === str.toLowerCase() && str !== str.toUpperCase();
  }

  const onGreekChange = useCallback((value: string) => {
    const greekArr = Array.from(value);
    let skip = false;
    const brilleArr: string[] = [];

    greekArr.forEach((c, idx) => {
      if (skip) {
        skip = false;
      }
      else {
        if (c.toLocaleLowerCase() === "α" || c.toLocaleLowerCase() === "ε" || c.toLocaleLowerCase() === "ο" || c.toLocaleLowerCase() === "υ" || c.toLocaleLowerCase() === "η") {
          if (idx !== greekArr.length - 1) {
            const res = alphagbet.find(g => g.character === (c.toLocaleLowerCase() + greekArr[idx + 1]))?.braille;
            if (res) {
              skip = true;
              brilleArr.push(res);
              return;
            }
          }
        }
        if (!isLowerCase(c)) {
          brilleArr.push("⠨" + alphagbet.find(g => g.character === c.toLocaleLowerCase())?.braille);
          return;
        }
        const res = alphagbet.find(g => g.character === c)?.braille;
        if (res) {
          brilleArr.push(res);
          return;
        }
      }
    });
    setBrilleText(brilleArr.join("|"))
  }, [])

  return (
    <>
      <Row>
        <Col span={24}>
          <Row gutter={5}>
            <Col style={{ padding: 15 }} span={12}>
              <Title level={3}>Ελληνικά</Title>
              <TextArea style={{ fontSize: 20 }} onChange={e => onGreekChange(e.target.value)} rows={20} /></Col>
            <Col style={{ padding: 15 }} span={12}>
              <Title level={3}>Braille</Title>
              <TextArea style={{ fontSize: 20 }} rows={20} value={brilleText} readOnly /></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
