package org.jwirereplay.parser;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.jwirereplay.parser.exception.PcapParseException;

public class PcapParserTest {
	private PCapParser pcapParser;
	
	@Before
	public void setup() throws PcapParseException {
		pcapParser = new PCapParser();
		pcapParser.openFile("/Volumes/Mac_Developer/testdump.cap");
	}
	
	@Test
	public void test_that_pcap_global_header_contains_correct_magic_number() {
		assertEquals(0xA1B2C3D4, pcapParser.getPcapGlobalHeader().getMagicNumber());
	}
	
	@Test
	public void test_that_pcap_global_header_contains_correct_network() {
		assertEquals(1, pcapParser.getPcapGlobalHeader().getNetwork());
	}
	
	@Test
	public void test_that_pcap_global_header_contains_correct_snaplen() {
		assertEquals(65535, pcapParser.getPcapGlobalHeader().getSnaplen());
	}
	
	@Test
	public void test_that_first_packet_is_recorded_at_correct_second_and_microsecond() {
		Packet packet = pcapParser.getNextPacket();
		assertEquals(1281628344l, packet.getSec());
		assertEquals(829706l, packet.getUsec());
	}
	
	@Test
	public void test_that_first_packet_has_the_correct_length() {
		Packet packet = pcapParser.getNextPacket();
		assertEquals(66, packet.getInclLen());
	}
	
	@Test 
	public void test_that_first_packet_is_a_TCP_packet() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
	}
	
	@Test 
	public void test_that_first_TCP_packet_has_correct_sequence_number() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertEquals(3704828735l, tcpPacket.getSequenceNumber());
	}
	
	@Test 
	public void test_that_first_TCP_packet_has_correct_acq_number() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertEquals(0l, tcpPacket.getAckNumber());
	}
	
	@Test 
	public void test_that_first_TCP_packet_has_correct_srcPort() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertEquals(1761, tcpPacket.getSrc_port());
	}
	
	@Test 
	public void test_that_first_TCP_packet_has_correct_dstPort() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertEquals(8091, tcpPacket.getDst_port());
	}
	
	@Test 
	public void test_that_first_TCP_packet_has_correct_length() {
		Packet packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertEquals(32, tcpPacket.getLen());
	}
	
	@Test 
	public void test_that_third_TCP_packet_has_correct_flags() {
		Packet packet = pcapParser.getNextPacket();
		packet = pcapParser.getNextPacket();
		packet = pcapParser.getNextPacket();
		assertTrue(packet instanceof TCPPacket);
		TCPPacket tcpPacket = (TCPPacket)packet;
		assertFalse(tcpPacket.isSyn());
		assertTrue(tcpPacket.isAck());
		assertFalse(tcpPacket.isFin());
		assertTrue(tcpPacket.isPsh());
		assertFalse(tcpPacket.isRst());
		assertFalse(tcpPacket.isUrg());
	}
}
